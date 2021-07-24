module.exports = {
  '*.{ts,js,vue}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.json': ['prettier --write'],
}
