
// Grab our credentials from a .env file or environment variables
require('.env').config();
const {
	DATABASE_URL,
	SUPABASE_SERVICE_API_KEY
} = process.env;

// Connect to our database 
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

// Our standard serverless handler function
exports.handler = async event => {

  // Insert a row
	const { data, error } = await supabase
		.from('notes')
 		.insert([
 			{ note: 'I need to not forget this' },
		]);

  // Did it work?
  console.log(data, error, 'AaaAAaA');
  
}
