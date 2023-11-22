<?php

namespace App\Http\Controllers;

use App\formRequest\MailFormRequestData;
use Resend\Laravel\Facades\Resend;

class MailController extends Controller
{
    public function __invoke(MailFormRequestData $data)
    {
        Resend::emails()->send([
            'from' => 'Acme <onboarding@resend.dev>',
            'to' => $data->email,
            'subject' => $data->subject,
            'html' => '<p>Hi I\'m' . $data->name . ',</p><p>' . $data->message . '</p>',
        ]);
    }
}
