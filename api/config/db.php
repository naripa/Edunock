<?php
$MYSQL_HOST = 'localhost';
$MYSQL_PORT = '3306';
$MYSQL_DATABASE = 'boilerplate';
$MYSQL_USERNAME = 'root';
$MYSQL_PASSWORD = '';
return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=' . $MYSQL_HOST
        . ';port=' . $MYSQL_PORT
        . ';dbname=' . $MYSQL_DATABASE,
    'username' => $MYSQL_USERNAME,
    'password' => $MYSQL_PASSWORD,
    'charset' => 'utf8',

    // Schema cache options (for production environment)
    //'enableSchemaCache' => true,
    //'schemaCacheDuration' => 60,
    //'schemaCache' => 'cache',
];
