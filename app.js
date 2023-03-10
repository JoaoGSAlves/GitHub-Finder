// Init Github
const github = new gitHub();
//Init UI
const ui = new UI();

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
	const userText = e.target.value;

	if (userText !== '') {
		github.getUser(userText).then((data) => {
			if (data.profile.message === 'Not Found') {
				//Show Alert
				ui.showAlert('User not found', 'alert alert-danger');
			} else {
				// Show Profile
				ui.showProfile(data.profile);
				ui.showRepos(data.repos);
			}
		});
	} else {
		// Clear Profiles
		ui.clearProfile();
	}
});
