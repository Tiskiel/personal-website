module.exports = {
  '**/*.{ts,tsx}': ['bash -c tsc --noEmit'],
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '**/*.php': ['composer fix --using="pint,phpstan" --dirty'],
};
