<?php

namespace App\formRequest;

use Spatie\LaravelData\Data;

class MailFormRequestData extends Data
{
    public function __construct(
        public string $name,
        public string $email,
        public string $subject,
        public string $message,
    ) {}

    public static function rules() : array
    {
        return [
            'name' => ['required', 'string', 'min:2', 'max:100'],
            'email' => ['required', 'email'],
            'subject' => ['required', 'string', 'min:5', 'max:100'],
            'message' => ['required', 'string', 'min:10', 'max:1000'],
        ];
    }
}
