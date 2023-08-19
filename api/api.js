const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '080ab06b42msh36d0dce6cdbc632p10c412jsn161066c66a61',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

try {
	const response = fetch(url, options);
	const result = (response);
	console.log(result);
    console.log(response.quoteText);
} catch (error) {
	console.error(error);
}
