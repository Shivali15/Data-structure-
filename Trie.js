// Trie 

let Node = function() {
	this.keys = new Map();
	this.end = false;   // all nodes without star have set send to false 
	this.setEnd = function() {
		this.end = true;   // end node is true
	};
	this.isEnd = function() {
		return this.end;
	};
};

let Trie = function() {

	this.root = new Node();

	this.add = function(input, node = this.root) {  // add() to add a word to trie recursion function 
		if (input.length == 0) {  //input means actual word to be insert in trie  
			node.setEnd();
			return;
		} else if (!node.keys.has(input[0])) {   //check that already there a node with that letter 
			node.keys.set(input[0], new Node());
			return this.add(input.substr(1), node.keys.get(input[0]));
		} else {
			return this.add(input.substr(1), node.keys.get(input[0]));
		};
	};

	this.isWord = function(word) {   // to check if that word is present in trie 
		let node = this.root;
		while (word.length > 1) {
			if (!node.keys.has(word[0])) {
				return false;
			} else {
				node = node.keys.get(word[0]);
				word = word.substr(1);
			};
		};
		return (node.keys.has(word) && node.keys.get(word).isEnd()) ? 
      true : false;
	};

	this.print = function() {   // print () print all the words that are in trie 
        		let words = new Array();
		let search = function(node, string) {
			if (node.keys.size != 0) {
				for (let letter of node.keys.keys()) {
					search(node.keys.get(letter), string.concat(letter));
				};
				if (node.isEnd()) {
					words.push(string);
				};
			} else {
				string.length > 0 ? words.push(string) : undefined;
				return;
			};
		};
		search(this.root, new String());
		return words.length > 0 ? words : mo;
	};

};

myTrie = new Trie()
myTrie.add('ball'); 
myTrie.add('bat'); 
myTrie.add('doll'); 
myTrie.add('dork'); 
myTrie.add('do'); 
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isWord('doll'))  // doll word is in the trie so :true
console.log(myTrie.isWord('dor'))   // dor word is not in trie so :false
console.log(myTrie.isWord('dorf'))   // dorf word is not in trie so : false
console.log(myTrie.print())// print all word that are added to the trie  