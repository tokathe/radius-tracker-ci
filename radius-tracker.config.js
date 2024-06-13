const samples = [
    {
        repoUrl: 'git@github.com:xformation/xformation-alertmanager-ui-plugin.git',
        displayName: 'xformation-alertmanager',
        isTargetModuleOrPath: {
            grafana: /^@grafana\/ui(?!.*\.s?css$)/,
            mui: /^(@mui|@material-ui)/,
            headlessui: /^@headlessui/,
        },
        since: new Date("2020-01-01"),
    }
]

module.exports = samples