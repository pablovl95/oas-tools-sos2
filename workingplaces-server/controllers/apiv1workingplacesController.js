import * as service from '../services/apiv1workingplacesService.js';

export function getWorkingplaces(req, res) {
    service.getWorkingplaces(req, res);
}

