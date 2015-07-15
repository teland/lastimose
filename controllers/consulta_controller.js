var models=require('../models/models.js')

//Autoload :consID
exports.load=function(req,res,next, consId) {
	models.Isodata.find(consId).then(
		function(param) {
			if (param) {
				req.param=param;
				next();
			} else {next(new Error('No existe ubicación ' + consId)); }
		}
		).catch(function(error) {next(error);});
};

//GET /consulta

exports.index=function (req,res) {
	models.Isodata.findAll().then(
		function(param){
		res.render('consulta/index',{param: param});
	}
	).catch(function(error) {next(error);})
 
};


//GET /consulta/:id

exports.show=function (req,res) {
			res.render('consulta/show',{param: req.param});
	};
 


//GET /consulta/:id/lista

exports.lista=function (req,res) {
 var resultado ='No hay nada en tal ubicación';
 if (req.query.ubi===req.param.reparam)
 	{ resultado='En '+req.param.reparam+' hay un motor y un bambalinón';}
	
 res.render('consulta/lista',{param: req.param, reparam:resultado });
};

//GET /author

exports.autor=function (req,res) {
 res.render('autor',{title: 'Autoría'});
};