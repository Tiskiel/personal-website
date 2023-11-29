<?php

namespace App\Http\Controllers;

use App\formRequest\MailFormRequestData;
use Resend\Laravel\Facades\Resend;

class MailController extends Controller
{
    public function __invoke(MailFormRequestData $data)
    {
        Resend::emails()->send([
            'from' => 'admin@jeanfrancoiswanty.be',
            'to' => 'info@jeanfrancoiswanty.be',
            'subject' => 'New mail from'.' '.$data->company ?? $data->first_name,
            'html' => '<p>Hi I\'m'.' '.$data->first_name.' '.$data->last_name.',</p><p>'.$data->message.'</p><p>'.$data->email.'</p>',
        ]);
    }
}
