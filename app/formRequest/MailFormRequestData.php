<?php

namespace App\formRequest;

use App\Enum\PhoneZoneEnum;
use Illuminate\Validation\Rule;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class MailFormRequestData extends Data
{
    public function __construct(
        public string $first_name,
        public string $last_name,
        public string $email,
        public PhoneZoneEnum $phone_zone,
        public string $phone,
        public string $company,
        public string $message,
    ) {
    }

    public static function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email:rfc,dns', 'max:255'],
            'phone_zone' => ['required', Rule::enum(PhoneZoneEnum::class), 'max:2'],
            'phone' => ['required', 'string', 'max:255'],
            'company' => ['required', 'string', 'max:255'],
            'message' => ['required', 'string', 'max:255'],
        ];
    }
}
