class gitHub {
	constructor() {
		this.client_id = '0400ed482f083072b396';
		this.client_secret = '045af6bd7af48ed789c1bac690260960a6ef3b89';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}
         ?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?
			per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=$
			{this.client_id}&client_secret=${this.client_secret}`
		);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		return {
			profile,
			repos,
		};
	}
}
