<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$dir = __DIR__;
$files = scandir($dir);
$fileList = [];

foreach ($files as $file) {
    if ($file != "." && $file != ".." && $file != "debug.php") {
        $fileList[] = [
            'name' => $file,
            'size' => filesize($dir . '/' . $file),
            'modified' => date("Y-m-d H:i:s", filemtime($dir . '/' . $file)),
            'type' => pathinfo($file, PATHINFO_EXTENSION)
        ];
    }
}

echo json_encode([
    'directory' => $dir,
    'files' => $fileList
], JSON_PRETTY_PRINT);
?> 