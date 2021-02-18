var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
	console.log('opened index');
	projects['viewAlt']=false;
  	response.render('index', projects);
};

exports.viewAlt = function(request, response){
	console.log('opened index Alt');
	projects['viewAlt']=true;
	response.render('index', projects);
};