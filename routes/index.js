
/*
 * GET home page.
 */

var twitterConfig = {
	"consumerKey" : "p1ttoL6t7Ns0HBtjI2dt4gp1ttoL6t7Ns0HBtjI2dt4g",
    "consumerSecret" : "wsVg5PMRa3dpIec3XNO6ZvIUyOANuI4mzIJ1YkkrxI",
    "accessToken" : "96737233-X1vlr5WYfZPE9VUYIEHhaeGZMwoU2t8XHLBIXJkHA",
    "accessTokenSecret" : "9Mq6lwpo5UUPVHmgjrEQe5EnDOLbekpJdLmhq6pu5wnOw",
    "callBackUrl" : "http://wondrwall.co.uk"
};

exports.index = function(req, res) {
	res.render('index', { tweet: 'Could not retrieve tweets at this time...' });
};