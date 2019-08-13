// wallparse@gmail.com, James Dickson 2019.
// License: GPL v2.0

export default function (server, options) 
{
	const https = 			require('https');
	const http = 			require('http');
	const useHttps = 		`${options.useHttps}` ;
	const strDisplayHost = 	`${options.displayHost}` ;
	const strDisplayPath =  `${options.displayPath}` ;	
	const displayPort = 	`${options.displayPort}` ;
	const restArray = 		`${options.restArray}`;
	
	function getURL(strHost, strPath, port, strMethod)
	{
		return new Promise((resolve, strURL) => 
		{
			try
			{
				let getter = http;

				if(useHttps) { getter = https; }

				getter.get({host:strHost,path:strPath,port:port,method:strMethod}, (resp) => 
				{
					  let data = '';

					  // A chunk of data is received.
					  resp.on('data', (chunk) => 
					  {
							data += chunk;
					  });

					  // The whole response is done.
					  resp.on('end', () => 
					  {
						  resolve( data);
					  });

				}).on("error", function (httperror)
				{
					console.log("GET request error " + strPath + ": " + httperror);
					resolve( "GET request error " + httperror);
				});		
			
			}
			catch(err)
			{
				console.log(err.message);
			}			
		});
	}
		
	
  server.route(
		{
			path: '/api/yellowiframeviz/getdisplaypage',
			method: 'GET',
			async handler(req, reply) 
			{
				try
				{
					console.log(req.query);
					console.log(strDisplayHost);
					console.log(strDisplayPath);
					console.log(displayPort);

					var strData = await getURL(strDisplayHost, strDisplayPath, displayPort, 'GET');
					
					return strData;
				}
				catch(err)
				{
					console.log(err.message);
					return err.message;
				}
			}
		}
		
	);	
	


  server.route(
		{
			path: '/api/yellowiframeviz/getremotepage/{name}',
			method: 'GET',
			async handler(req, reply) 
			{
				try
				{		
					console.log(req.params.name);
					console.log(req.query)
					
					let strCommandArgument = "";
					let strCommand = req.params.name;
					let x = Object.keys(req.query).length;

					for (const key in req.query) 
					{
						strCommandArgument += key +"="+req.query[key];

						x=x-1;
						if(x > 0) strCommandArgument += "&";					
					}
					

					//console.log("Command: " + strCommand);
					//console.log("Argument: " + strCommandArgument);

					if(strCommandArgument.length > 0)
					{
						strCommandArgument = "?" + strCommandArgument;
					}

					const strPaths = restArray.split(",");

					//for (const s of strPaths) 
					//{
					//	console.log(s);
					//}				
					
					if(strPaths.includes(strCommand))
					{
						console.log("CALL allowed:" + strCommand);

						var strData = await getURL(strDisplayHost, "/" + req.params.name+strCommandArgument, displayPort, 'GET');
						
						return strData;
					}
					else
					{
						console.log("CALL not allowed:" + strCommand);
						return "REST-call not allowed";
					}
				
				}
				catch(err)
				{
					console.log(err.message);
					return err.message;
				}	
			}
		}
		
	); 	

}
