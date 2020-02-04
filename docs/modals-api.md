---
id: modals-api
title: Modal Commands
sidebar_label: Modal
---
## `showModal()`
Show a screen as a modal.

#### Parameters
| Name   | Required | Type                | Description                                                                                                            |
| ------ | -------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| layout | Yes      | [Layout](Layout.md) | Any type of layout. [BottomTabs](BottomTabs.md), [Stack](Stack.md), [SideMenu](SideMenu.md), [Component](Component.md) |

```js
Navigation.showModal({
  stack: {
    children: [{
      component: {
        name: 'example.ModalScreen',
        passProps: {
          text: 'stack with one child'
        },
        options: {
          topBar: {
            title: {
              text: 'Modal'
            }
          }
        }
      }
    }]
  }
});
```

## `dismissModal()`
Dismiss the current modal.

#### Parameters
| Name         | Required | Type    | Description                                                |
| ------------ | -------- | ------- | ---------------------------------------------------------- |
| componentId  | Yes      | string  | Any component id presented in the modal                    |
| mergeOptions | No       | Options | Options to be merged before dismissing the Modal. |

```js
Navigation.dismissModal(this.props.componentId);
```

## `dismissAllModals()`
Dismiss all the current modals at the same time.

#### Parameters
| Name         | Required | Type    | Description                                                |
| ------------ | -------- | ------- | ---------------------------------------------------------- |
| mergeOptions | No       | Options | Options to be merged before dismissing all modals. |

```js
Navigation.dismissAllModals();
```