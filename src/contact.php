<?php

header('Content-Type: application/json');

// Lesen des JSON-Strings aus dem PHP-Input-Stream
$json = file_get_contents('php://input');

// Decodieren des JSON-Strings in ein PHP-Array
$data = json_decode($json, true);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Zugriff auf Ihre Daten über das $data Array
    $name = strip_tags(trim($data["name"]));
    $from = filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($data["message"]);

    $recipient = "marcelschliwka@protonmail.com"; // Ihre E-Mail-Adresse
    $subject = "Neue Nachricht von $name";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $from\n\n"; // Verwenden Sie $from
    $email_content .= "Nachricht:\n$message\n";

    $email_headers = 'From: admin@marcelschliwka.de' . "\r\n" .
    'Reply-To: admin@marcelschliwka.de' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    // Senden der E-Mail an Sie
    mail($recipient, $subject, $email_content, $email_headers);

    // Senden einer Bestätigungs-E-Mail an den Absender
    $confirmation_subject = "Ihre Nachricht wurde gesendet";
    $confirmation_content = "Vielen Dank für Ihre Nachricht, wir werden uns bald bei Ihnen melden.";
    mail($from, $confirmation_subject, $confirmation_content, "From: $from");

    echo json_encode(["message" => "Ihre Nachricht wurde gesendet."]);
}
?>
