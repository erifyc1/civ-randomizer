import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<head>
					<Head />
					<link rel="stylesheet" href="/index.css" />
					<link rel="icon" href="/CIV6.ico" />
				</head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
