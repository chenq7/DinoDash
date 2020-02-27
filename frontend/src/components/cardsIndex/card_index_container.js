import {fetchMinions} from '../../actions/minion_actions';
import CardIndex from './card_index';
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
  const user = (state.session ? state.session.user : null);
  return {
    minions: state.minions,
    currentUser: user
  };
};

const mapDispatchToProps = dispatch => {
  return {
      fetchMinions: () => dispatch(fetchMinions()),
       BuyAlert: () => dispatch(openModal("BuyAlert"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex);
