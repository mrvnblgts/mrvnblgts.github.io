<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set JSON header
header('Content-Type: application/json');

// Allow cross-origin requests
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get and sanitize input
$name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
$subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : '';
$message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';

// Validate input
$errors = [];
if (empty($name)) $errors[] = 'Name is required';
if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}
if (empty($subject)) $errors[] = 'Subject is required';
if (empty($message)) $errors[] = 'Message is required';


// Load PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Email configuration
$mail = new PHPMailer(true);
$confirm = new PHPMailer(true);

try {
    // Server settings for both mailers
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'dfcbarugomailer@gmail.com';  // Sender email
    $mail->Password   = 'pnulpihtbbspdhtm';          // App password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Recipients - send to infirmary email
    $mail->setFrom('dfcbarugomailer@gmail.com', 'Portfolio Website');
    $mail->addAddress('balagtasmarvin27@gmail.com', 'Portfolio'); // Receiving email
    $mail->addReplyTo($email, $name); // Reply to sender

    // Content for Infirmary Email
    $mail->isHTML(false);
    $mail->Subject = "Portfolio Contact Form";
    $mail->Body    = "You have received a new message from your portfolio website:\n\n"
                   . "Name: $name\n"
                   . "Email: $email\n"
                   . "Subject: $subject\n\n"
                   . "Message: $message\n";

    $mail->send();

    // Setup confirmation email
    $confirm->isSMTP();
    $confirm->Host       = 'smtp.gmail.com';
    $confirm->SMTPAuth   = true;
    $confirm->Username   = 'dfcbarugomailer@gmail.com';
    $confirm->Password   = 'pnulpihtbbspdhtm';
    $confirm->SMTPSecure = 'tls';
    $confirm->Port       = 587;

    // Send confirmation to sender
    $confirm->setFrom('dfcbarugomailer@gmail.com', 'MediCare');
    $confirm->addAddress($email, $name);
    $confirm->isHTML(false);
    $confirm->Subject = "Thank you for reaching out";
    $confirm->Body    = "Dear $name,\n\n"
                      . "Thank you for reaching out. I have received your message and I will get back to you as soon as possible.\n\n"
                      . "This is an automated confirmation. Please do not reply to this email.";

    $confirm->send();

    echo json_encode(['success' => true, 'message' => 'Your message has been sent successfully!']);

} catch (Exception $e) {
    error_log("Email sending failed: " . $e->getMessage());
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again later.']);
}
?>
