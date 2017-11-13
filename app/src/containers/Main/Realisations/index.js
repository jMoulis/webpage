/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Realisations from 'src/components/Main/Realisations';
import { displayModalContact } from 'src/store/reducer';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  realisations: state.realisations,
});

// Actions
const mapDispatchToProps = {};


/*
 * Export default
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const RealisationsContainer = createContainer(Realisations);
export default RealisationsContainer;
