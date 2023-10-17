# Node Security

This project focuses on how you can secure your node projects and what are the best practices for that.

## Create Self-Signed Certificate with OpenSSL

```bash
openssl req -x509 -sha256 -days 365 -key key.pem -in csr.csr -out cert.pem
```
