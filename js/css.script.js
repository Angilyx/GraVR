function changeTextSize() {

// Get HTML head element 
	var head = document.getElementsByTagName('HEAD')[0];  

	// Create new link Element 
	var link = document.createElement('link'); 

	// set the attributes for link element  
	link.rel = 'stylesheet';  
  
	link.type = 'text/css'; 
  
	link.href = 'css/stil.text.script.css';  

	// Append link element to HTML head 
	head.appendChild(link);  
	
}

function changeBackground() {

// Get HTML head element 
	var head = document.getElementsByTagName('HEAD')[0];  

	// Create new link Element 
	var link = document.createElement('link'); 

	// set the attributes for link element  
	link.rel = 'stylesheet';  
  
	link.type = 'text/css'; 
  
	link.href = 'css/stil.bakgrund.script.css';  

	// Append link element to HTML head 
	head.appendChild(link);  
	
}