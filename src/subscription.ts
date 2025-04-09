import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 9527,
  name: '六记のGKD规则',
  version: 0,
  author: 'ACG-Q',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/ACG-Q/gkd-rules',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
