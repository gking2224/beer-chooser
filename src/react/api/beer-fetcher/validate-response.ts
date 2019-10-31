import BeerResultsSchema from '../../../api-schema/FetchBeersResponse.json';
import createValidator from './create-validator';

const validateFetchBeersResponse = createValidator(BeerResultsSchema);

export default validateFetchBeersResponse;
