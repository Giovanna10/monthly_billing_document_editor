export type InvalidDataResponse = {
    issues: [
		{
			code: string,
			expected: string,
			received: string,
			path: string[],
			message: string
		}
	],
	name: string
}