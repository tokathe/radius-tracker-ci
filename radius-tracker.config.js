const samples = [
    {
        repoUrl: 'https://github.com/rangle/radius-token-tango',
        displayName: 'token-tango',
        isTargetModuleOrPath: {
            grafana: /^@grafana\/ui(?!.*\.s?css$)/,
            mui: /^(@mui|@material-ui)/,
            headlessui: /^@headlessui/,
            radixui: /^@radix-ui/,
        },
        since: new Date("2023-12-01"),
    },
    {
        repoUrl: 'https://github.com/rangle/RN-UI-libs-POC',
        displayName: 'rn-ui-libs-poc',
        isTargetModuleOrPath: {
            grafana: /^@grafana\/ui(?!.*\.s?css$)/,
            mui: /^(@mui|@material-ui)/,
            headlessui: /^@headlessui/,
            radixui: /^@radix-ui/,
        },
        since: new Date("2023-12-01"),
    },
    {
        repoUrl: 'https://github.com/rangle/RadiusWidgetPOC',
        displayName: 'radius-widget-poc',
        isTargetModuleOrPath: {
            grafana: /^@grafana\/ui(?!.*\.s?css$)/,
            mui: /^(@mui|@material-ui)/,
            headlessui: /^@headlessui/,
            radixui: /^@radix-ui/,
        },
        since: new Date("2023-12-01"),
    },
    {
        repoUrl: 'https://github.com/adminazhar/shadcn-ui-template',
        displayName: 'shadcn-ui-template',
        isTargetModuleOrPath: {
            grafana: /^@grafana\/ui(?!.*\.s?css$)/,
            mui: /^(@mui|@material-ui)/,
            headlessui: /^@headlessui/,
            radixui: /^@radix-ui/,
        },
        since: new Date("2023-12-01"),
    }
]

module.exports = samples