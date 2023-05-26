import { GlobalConfig } from 'payload/types';
// import link from '../fields/link';
// import colorField from "../color-picker/config";
import buildTriggerField from "../build-trigger/config";

const Site: GlobalConfig = {
    slug: 'site',
    label: 'Site',
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
        },
        {
            name: 'subtitle',
            label: 'Subtitle',
            type: 'text',
        },
        // colorField
        buildTriggerField
    ],
};

export default Site;