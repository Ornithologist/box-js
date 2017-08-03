/* Patches from box-js */
	window = this;

	Date.prototype.getYear = function() {
		return new Date().getFullYear();
	};

	Array.prototype.Count = function() {
		return this.length;
	};

	function Error(message, description) {
		const e = new Error(message);
		e.description = description;
		return e;
	}

	_OriginalFunction = Function;
	Function = function(...args) {
		const source = rewrite(args.pop());
		logJS(source);
		return new _OriginalFunction(...args, source);
	}
/* End patches */