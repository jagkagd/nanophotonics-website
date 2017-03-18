<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';

$dsn = "mysql:host=localhost;dbname=nanophotonics";
$db = new PDO($dsn, 'root', 'jagkagd');

$app = new \Slim\App;

$app->get('/events', function(Request $request, Response $response){
    $params = $request->getQueryParams();
    $res = $GLOBALS['db']->query("select * from events limit " . $params['limit']);
    $response->getBody()->write(json_encode($res->fetchAll(PDO::FETCH_ASSOC)));
    return $response;
});

$app->get('/news', function(Request $request, Response $response){
    $params = $request->getQueryParams();
    if(array_key_exists('limit', $params)){
        $res = $GLOBALS['db']->query("select * from news limit " . $params['limit']);
    }else{
        $res = $GLOBALS['db']->query("select * from news");
    }
    $response->getBody()->write(json_encode($res->fetchAll(PDO::FETCH_ASSOC)));
    return $response;
});

$app->get('/researchHighlights', function(Request $request, Response $response){
    $params = $request->getQueryParams();
    $res = $GLOBALS['db']->query("select * from researchhighlights limit " . $params['limit']);
    $res = $res->fetchAll(PDO::FETCH_ASSOC);
    $arrLength = count($res);
    for($x=0; $x<$arrLength; $x++){
        $paperRes = $GLOBALS['db']->query("select * from journals where id=" . $res[$x]['paper']);
        $paperRes = $paperRes->fetchAll(PDO::FETCH_ASSOC)[0];
        $res[$x]['paper'] = $paperRes;
    }
    $response->getBody()->write(json_encode($res));
    return $response;
});

$app->get('/slides', function(Request $request, Response $response){
    $params = $request->getQueryParams();
    $res = $GLOBALS['db']->query("select * from researchhighlights where toSlide='Y' limit " . $params['limit']);
    $res = $res->fetchAll(PDO::FETCH_ASSOC);
    $arrLength = count($res);
    for($x=0; $x<$arrLength; $x++){
        $paperRes = $GLOBALS['db']->query("select * from journals where id=" . $res[$x]['paper']);
        $paperRes = $paperRes->fetchAll(PDO::FETCH_ASSOC)[0];
        $res[$x]['paper'] = $paperRes;
    }
    $response->getBody()->write(json_encode($res));
    return $response;
});

$correspondDict = array(
    "faculty"              => array("'professor'", "'associate professor'"),
    "admin_staff"          => array("'admin staff'"),
    "post_docs"            => array("'poster doctor'"),
    "grad_students"        => array("'master'", "'PhD'"),
    "undergrad_students"   => array("'undergraduate'"),
    "former_group_members" => array("'former'")
);

$app->get('/people', function(Request $request, Response $response){
    $params = $request->getQueryParams();
    $sqlWhere = '';
    global $correspondDict;
    if(array_key_exists('category', $params)){
        $sqlCategory = $correspondDict[$params['category']];
        $arrLength = count($sqlCategory);
        for($x=0; $x<$arrLength; $x++){
            if($x == 0){
                $sqlWhere = $sqlWhere . ' degree=' . $sqlCategory[$x];
            }else{
                $sqlWhere = $sqlWhere . ' or degree=' . $sqlCategory[$x];
            }
        }
    }
    if(array_key_exists('id', $params)){
        $sqlWhere = ' id=' . $params['id'];
    }
    $res = $GLOBALS['db']->query("select * from people where" . $sqlWhere);
    $response->getBody()->write(json_encode($res->fetchAll(PDO::FETCH_ASSOC)));
    return $response;
});

$app->get('/{routes}', function(Request $request, Response $response, $args){
    if(in_array($args['routes'], array("books", "conferences", "journals", "collaborators", "courses"))){
        $res = $GLOBALS['db']->query("select * from " . $args['routes']);
        $response->getBody()->write(json_encode($res->fetchAll(PDO::FETCH_ASSOC)));
        return $response;
    }else{
        $response->getBody()->write(json_encode(array('a'=>'b', 'c'=>'d')));
        return $response;
    }
});

$app->run();
?>
