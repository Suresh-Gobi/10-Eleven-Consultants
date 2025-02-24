<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = htmlspecialchars($data["name"]);
    $email = htmlspecialchars($data["email"]);
    $phone = htmlspecialchars($data["phone"]);
    $subject = htmlspecialchars($data["subject"]);
    $message = htmlspecialchars($data["message"]);

    $to = "info@10eleven.ae";
    $headers = "From: $email\r\nReply-To: $email";
    $fullMessage = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

    if (mail($to, $subject, $fullMessage, $headers)) {
        echo json_encode(["message" => "Message Sent Successfully!"]);
    } else {
        echo json_encode(["message" => "Failed to send message. Try again."]);
    }
} else {
    echo json_encode(["message" => "Invalid request."]);
}
?>
