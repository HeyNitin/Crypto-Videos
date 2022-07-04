const getVideoId = (link: string) => {
	let id = "";
	let inLink = false;

	for (let char of link) {
		if (inLink) {
			if (char === "&") {
				break;
			}
			id += char;
		}

		if (char === "=") {
			inLink = true;
		}
	}
	return id;
};

export { getVideoId };
