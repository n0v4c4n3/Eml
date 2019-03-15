# Eml
Node app to parse EML files
In: .eml > Out: json response with .html inline
`npm install / start`

## Dependencies 
* Express
* MailParser
* Multer

## Usage 

Requests:
```shell
curl -X POST \
  http://127.0.0.1:3000/read \
  -H 'content-type: multipart/form-data;' \
  -F 'file=@rutaal/test.eml' \
  -F processData=false \
  -F contentType=false
```
Response:
```json
{
    "html": "<!DOCTYPE html PUBLIC ... >Html content</body>\n</html>",
    "text": "Text content",
    "headers": {
        "received": [
            "..."
        ],
        "authentication-results": "...",
        "received-spf": "...",
        "x-incomingtopheadermarker": "...",
        "dkim-signature": "...",
        "x-msfbl": "...",
        "date": "...",
        "from": "...",
        "to": "...",
        "subject": "...",
        "content-type": "...",
        "message-id": "...",
        "feedback-id": "...",
        "x-incomingheadercount": "...",
        "return-path": "...",
        "x-ms-exchange-organization-expirationstarttime": "...",
        "x-ms-exchange-organization-expirationstarttimereason": "...",
        "x-ms-exchange-organization-expirationinterval": "...",
        "x-ms-exchange-organization-expirationintervalreason": "...",
        "x-ms-exchange-organization-network-message-id": "...",
        "x-eopattributedmessage": "...",
        "x-eoptenantattributedmessage": "...",
        "x-ms-exchange-organization-messagedirectionality": "...",
        "x-forefront-antispam-report": "...",
        "x-ms-exchange-organization-authsource": "...",
        "x-ms-exchange-organization-authas": "...",
        "x-ms-publictraffictype": "...",
        "x-ms-userlastlogontime": "...",
        "x-ms-office365-filtering-correlation-id": "...",
        "x-microsoft-antispam": "...",
        "x-ms-traffictypediagnostic": "...",
        "x-ms-exchange-purlcount": "...",
        "x-ms-exchange-eopdirect": "...",
        "x-sender-ip": "...",
        "x-sid-pra": "...",
        "x-sid-result": "...",
        "x-ms-exchange-organization-pcl": "...",
        "x-originatororg": "...",
        "x-ms-exchange-crosstenant-originalarrivaltime": "...",
        "x-ms-exchange-crosstenant-network-message-id": "...",
        "x-ms-exchange-crosstenant-id": "...",
        "x-ms-exchange-crosstenant-fromentityheader": "...",
        "x-ms-exchange-crosstenant-rms-persistedconsumerorg": "...",
        "x-ms-exchange-transport-crosstenantheadersstamped": "...",
        "x-ms-exchange-transport-endtoendlatency": "...",
        "x-ms-exchange-processed-by-bccfoldering": "...",
        "x-microsoft-antispam-mailbox-delivery": "...",
        "x-message-info": "...",
        "x-message-delivery": "...",
        "x-microsoft-antispam-message-info": "...",
        "mime-version": "..."
    },
    "subject": "...",
    "messageId": "...",
    "priority": "...",
    "from": [
        {
            "address": "...",
            "name": "..."
        }
    ],
    "to": [
        {
            "address": "...",
            "name": "..."
        }
    ],
    "date": "...",
    "receivedDate": "..."
}
```