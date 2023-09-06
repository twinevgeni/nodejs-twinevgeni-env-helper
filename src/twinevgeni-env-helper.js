const appRoot = require('app-root-path');
const dotenv = require('dotenv');
const stringHelper = require('twinevgeni-string-helper');

module.exports = function () {
    /**
     * load env vars from envPath
     * @param {string} envPath
     */
    function loadEnv(envPath)
    {
        try {
            dotenv.config({path: envPath});
        } catch (error) {

        }
    }

    /**
     * load env vars by envName (in root directory)
     * @param {string} envName
     */
    function loadEnvByName(envName)
    {
        try {
            const envPath = appRoot + '/.' + envName;
            loadEnv(envPath);
        } catch (error) {

        }
    }

    /**
     * load default env vars (.env file)
     */
    function loadDefaultEnv()
    {
        loadEnvByName('env');
    }

    /**
     * read value or return default
     * @param value
     * @param defaultValue
     * @returns {*|null}
     */
    function readEnvValue(value, defaultValue = null)
    {
        return !!value ? value : defaultValue;
    }

    /**
     * read value or return default
     * @param value
     * @param {boolean} defaultValue
     * @returns {boolean}
     */
    function readBoolEnvValue(value, defaultValue = false)
    {
        return !!value ? stringHelper.stringToBoolean(value) : defaultValue;
    }

    function readNumberEnvValue(value, defaultValue = 0) {

    }


    /**
     * read value or return default
     * @param {string} valueKey
     * @param defaultValue
     * @returns {*|null}
     */
    function readEnv(valueKey, defaultValue = null)
    {
        return readEnvValue(process.env[valueKey], defaultValue);
    }

    /**
     * read value or return default
     * @param {string} valueKey
     * @param {boolean} defaultValue
     * @returns {boolean}
     */
    function readBoolEnv(valueKey, defaultValue = false)
    {
        return readBoolEnvValue(process.env[valueKey], defaultValue);
    }

    return {
        loadEnv: loadEnv,
        loadEnvByName: loadEnvByName,
        loadDefaultEnv: loadDefaultEnv,

        readEnvValue: readEnvValue,
        readBoolEnvValue: readBoolEnvValue,

        readEnv: readEnv,
        readBoolEnv: readBoolEnv
    }
}();
