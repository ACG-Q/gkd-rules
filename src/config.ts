import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 9527,
  version: 0,
  name: '六记のGKD规则',
  author: 'ACG-Q',
  supportUri: 'https://github.com/ACG-Q/gkd-rules',
  updateUrl:
    'https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACG-Q/gkd-rules/main/dist/gkd.json5',
  checkUpdateUrl:
    'https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACG-Q/gkd-rules/main/dist/gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
