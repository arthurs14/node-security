# Node Security

This project focuses on how you can secure your node projects and what are the best practices for that.

## What is Covered

- SSL/TSL with OpenSSL
- Authentication vs Authorization
- Social Sign In
- API Keys
- JWT Tokens
- OAuth

## Create Self-Signed Certificate with OpenSSL

```bash
openssl req -x509 -sha256 -days 365 -key key.pem -in csr.csr -out cert.pem
```
