import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './state';

//modules
import user from './modules/user';

export default {
	getters,
	mutations,
	actions,
	state,
	modules: {
		user
	}
};
