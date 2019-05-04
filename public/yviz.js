// wallparse@gmail.com, James Dickson 2019.
// License: GPL v2.0

import {VisFactoryProvider} from 'ui/vis/vis_factory';
import {VisTypesRegistryProvider} from 'ui/registry/vis_types';
import { YellowvisWrapper } from './yellowviz_controller';

import { DefaultEditorSize } from 'ui/vis/editor_size';
import yellowiframevizTemplate from './yellowviz_param_template.html';

function YellowvisProvider(Private) 
{
  const VisFactory = Private(VisFactoryProvider);

  return VisFactory.createReactVisualization({
    name: 'yellowviz',
    title: 'yellowviz',
    icon: 'editorCodeBlock',
    description: 'show html-page in iframe',

    visConfig: {
      component: YellowvisWrapper,
      defaults: {
        fontSize: 12,
        openLinksInNewTab: false
      }
    },
    editorConfig: {
      optionsTemplate: yellowiframevizTemplate,
      enableAutoApply: true,
      defaultSize: DefaultEditorSize.LARGE,
    },
    options: {
      showTimePicker: false,
    },
    requestHandler: 'none',
    responseHandler: 'none',
    implementsRenderComplete: true

  });
}

VisTypesRegistryProvider.register(YellowvisProvider);

// export the provider so that the visType can be required with Private()
export default YellowvisProvider;
