import { google } from 'googleapis';

export default async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: "spreadsheet@hack-united.iam.gserviceaccount.com",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCvVrxOCDWYM61\n7IRVl9dKwzhuZNXgWWG9I7H/n7PsWkw9BqrEFy86pgUhcgEoptzyV44jchhbjEdO\nKiY8rDV/Zx3yPJToO6+b3EKg1oZPrBUcizyaP4HfJoT5d8gE0VnBnyy4cXOQeGG+\n5Bw2FNxYqhFMnA5e+G4TGVdjWzxqCtCCne1NOECrV6DMHuYGsOWwJMOwWAyx1TN/\nc7iJIR2VJcIqAaVTia87ClQ78rTYX4Jv4EQh1Etk09A3KWAdy61T9zrwVGvI/c/U\njCvt5f0vBt2yYoKc/vJL+zYen5H4Xu7EuLcDc9P8/GSgERHqqS+26o5HE6N0dqWZ\npY4WdHaRAgMBAAECggEAO3gS5RYUZRM0HPdI5FCVxPV/7qppa/UvtVBIw7zT96oN\nnRdDn9VKrXjUmUWU2AK492LIe8eUa6SXg+W4PpACWFE3omlgudi8RHcLe813P65X\n1hspGxuov+ol8n7jPKFn7Qp8YCj5NxWkF+TWPqe5MHRjCwefFd580uVKvAM5HFJ/\nTVF3txYL6Q4/zXIDh0gwDZ1dcj+utjK+9x+ilB/g0+/dejZxucjchh4rfoioHwmP\nstvKG7dsTeETcxLV/k5Xlcm8h8YjK+vfjf9LjYLIbuO6zta1+mFYA2dFdHMVx6rt\nw9k2BIB+BMnu+m5NBr0hgnrc+Q4YiLrjNvvvTUw6fwKBgQDyVuSV9Vd0VzkKrurt\nQ8/iRzPcb4/E5+giuKx79/eS74c2jv06jaLWi+LJIn8wtyRBZcXIZipPBkCkjqwK\nCetB/Dr022+ORSSUsLS0apT9GDxfcPVRT3U8dfMZYYzMQw6WiKRga3YX91NPXAwG\nf8M0cpGqvLFgYJvBfh4qUlQyGwKBgQDNt5GL/EaazJLf33ytnVVih2/K+5EN4Jyw\nW1lEQfpV7gDQ68OFWBzCEb9yHyXZ83SJhDDX0w14bDFdEb1c0R7f4hh1AbEoKilM\ngyiQP17rBp09v3JjYuU4mVoqDtXRiXtHnXrHlWGvmR0SXsTvUH62sOi/Xhyup7ln\naZyh7DukwwKBgQDRREnWWOtxUpS2bf/+bU2J1/SnyUq8PYqO2SxRTPrkTqVTbryr\noH1aiaeICpsM5UmQk6Lsf5TPctXFhFJ5xMD71STQJuG5WGnTYJhbJ6KKwC/6NuAQ\nm+3gDPalF0DvboSdZ1eSz5lF7tRpNlJIFnHpy3mQl6sQT7yQpSjFYRzFuwKBgC7N\nOqG8bVu+exPPxo/BIbHe2kI15ZRgq4U74x0yXX+7PBhL6xmlKDXGz+VozLW/O54l\nou8XJxNkmf5wkMJTGVEaITJNhj57CRZNKKdYo4GY6aEosx+FWlz8FpVG9sJLIu7y\nFwLdK3JFxWVuhiNkDtAFg442HRRnODkcv/PeyNr9AoGAMpjfBHMwJBPDtUploJpa\nOqH7Eb/d06hRA1rWjSi0aWMy6aNsKUmjtF1he6lg1qT+01U+Di+OBv6UB/SjKmXC\nfr7ZiCEPkRxrdmHzAIbcJAMAbX8wufag7OqkD+XMpkSxeCEP0BjU3odA8BEjx7Wk\nJwOvJCstjkiCHBcrYF5n9cE=\n-----END PRIVATE KEY-----\n"
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const spreadsheetId = "1zGF9iNK1b8zEs21IlSWhvR0E-cugOqA4b7rD2h-Qrn0";
  const range = 'Sheet1!A1:D1';

  const values = [
    [req.body.name, req.body.email, req.body.message],
  ];

  const resource = {
    values,
  };

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource,
    });

    console.log(response.data);

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);

    res.status(500).json({ success: false });
  }
};