const kafka_url = "kafka+ssl://x.x.x.x:9096,kafka+ssl://y.y.y.y:9096,kafka+ssl://z.z.z.z:9096";

const cert_str = `-----BEGIN CERTIFICATE-----
NWQ1Ni1jM...
...
... 
...
-----END CERTIFICATE-----`;

const certkey_str = `-----BEGIN RSA PRIVATE KEY-----
NWQ1Ni1jM...
...
...
...
-----END RSA PRIVATE KEY-----`;

module.exports = {
  kafka_url: kafka_url,
  cert_str: cert_str,
  certkey_str: certkey_str
};
