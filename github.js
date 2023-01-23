class gitHub {
	constructor() {
		this.client_id = '0400ed482f083072b396';
		this.client_secret = '045af6bd7af48ed789c1bac690260960a6ef3b89';
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}
         ?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);
		const profile = await profileResponse.json();

		return {
			profile,
		};
	}
}
