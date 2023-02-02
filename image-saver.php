$data = $_POST['imgdata'];
$pass = $_POST['pass'];

if ($pass == "mypass") {
    $img = imagecreatefromstring(base64_decode(substr($data,strpos($data,',')+1)));
    $result = imagepng($img,"image.png");
    die($img);
    echo "Result: " . $result . "<br>";
} else {
    echo "Nice attempt.";
}