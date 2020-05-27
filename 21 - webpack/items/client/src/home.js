const global = require('./global.js');

module.exports = {
	getView: (req) => `
		<h1><img src='${global.logo}'>Items</h1>
		
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere congue ex, sed porta ipsum tempor eget. Phasellus pretium tellus vitae lectus pellentesque placerat. Suspendisse posuere malesuada sem, vitae tempus neque venenatis eu. Mauris mattis, quam nec sodales sodales, nisl nulla pellentesque velit, at volutpat massa metus eget sapien. Pellentesque suscipit, nisl id luctus malesuada, metus justo gravida mauris, eu condimentum quam ipsum vel nisi. Aliquam erat volutpat. Praesent non justo sed eros faucibus congue sit amet eu tortor. Fusce tincidunt ullamcorper nisi, non volutpat risus venenatis a.</p>

		<p>Nam quis ante eget nibh tristique facilisis sed sed ante. Aenean cursus venenatis turpis, lacinia fermentum quam imperdiet vel. Donec suscipit feugiat mi, at scelerisque ipsum auctor in. Sed in metus finibus, euismod eros quis, egestas dui. Ut libero arcu, varius sit amet rutrum ut, mattis vel ligula. Duis sed nibh vulputate mauris tincidunt gravida. Integer maximus quis est non consequat. Nunc pellentesque venenatis varius. Aliquam tempus leo magna, a accumsan lorem maximus quis. Aliquam finibus nisl id diam consequat vehicula. Duis nec eros tristique, vestibulum tortor at, consequat dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed imperdiet hendrerit mattis. In hac habitasse platea dictumst. Mauris rhoncus nibh vel libero ultrices lacinia. Fusce odio nunc, pretium at lorem eu, consectetur sollicitudin tellus.</p>

		<p>Vivamus quam urna, accumsan et efficitur sit amet, dapibus a neque. Duis sed pretium arcu. Phasellus scelerisque nunc et mauris tristique ultrices. Nam purus nisi, semper sagittis ullamcorper non, mollis sit amet nibh. Fusce euismod pretium facilisis. Sed vel lectus ut sem rutrum pretium. Curabitur finibus in justo eget viverra. Donec efficitur, tortor nec ornare rhoncus, eros urna aliquet mauris, sit amet posuere velit est sit amet arcu.</p>

		<p>Mauris nec cursus tellus. Donec velit leo, varius eget ullamcorper vitae, scelerisque vitae nisi. Donec vitae nibh tincidunt turpis malesuada sagittis a non dui. Nullam egestas eros non sem rutrum, non pharetra justo placerat. Aenean sollicitudin a magna vitae fringilla. In sagittis turpis vel lectus pulvinar aliquam. Suspendisse viverra tortor at velit ultrices, vel rutrum velit commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ut dui vel dui lacinia aliquet.</p>

		<p>Phasellus vel porttitor justo. Morbi dignissim euismod quam, nec rutrum tortor pulvinar sit amet. Proin ut aliquet enim. Aenean id bibendum erat. Nulla eget augue eu ligula fringilla fermentum eu et sem. Quisque venenatis maximus risus a viverra. Nunc varius pretium risus vel ullamcorper. Quisque a risus gravida, lobortis turpis a, pretium arcu. Sed massa elit, fringilla vel porttitor et, facilisis sit amet lacus. Quisque in eros sed tortor ultrices porta vel ac leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque finibus pellentesque fringilla. Morbi efficitur vulputate blandit. Donec quis sapien in sem porta eleifend. Ut ante est, imperdiet a nunc ut, dignissim iaculis mi. Integer lorem enim, euismod rhoncus ex ac, blandit varius risus.</p>

	`,
	run: () => {}
};
