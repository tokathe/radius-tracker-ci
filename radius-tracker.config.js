const samples = [
    {
        repoUrl: './tracker',
        displayName: 'tracked-repository',
        isTargetModuleOrPath: {
            grafana: /^@grafana\/ui(?!.*\.s?css$)/,
            mui: /^(@mui|@material-ui)/,
            headlessui: /^@headlessui/,
        },
        since: new Date("2020-01-01"),
    }
]

module.exports = samples