type ErrorResponse = {
	errors: {
		message: string;
		extensions: {
			code: string;
			reason?: string;
		};
	}[];
};

export type { ErrorResponse };
