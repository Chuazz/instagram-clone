type ErrorResponse = {
	errors: {
		message: string;
		extensions: {
			code: string;
			reason?: string;
			field?: string;
		};
	}[];
};

export type { ErrorResponse };
