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

    /**
     * read value or return default
     * @param value
     * @param {number} defaultValue
     * @returns {*|number}
     */
    function readNumberEnvValue(value, defaultValue = 0) {
        return !!value ? stringHelper.stringToNumber(value) : defaultValue;
    }

    /**
     * read value or return default
     * @param value
     * @param {number} radix
     * @param {number} defaultValue
     * @returns {number|number}
     */
    function readIntEnvValue(value, radix = 10, defaultValue = 0) {
        return !!value ? parseInt(value, radix) : defaultValue;
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

    /**
     * read value or return default
     * @param {string} valueKey
     * @param {number} defaultValue
     * @returns {*|number}
     */
    function readNumberEnv(valueKey, defaultValue = 0) {
        return readNumberEnvValue(process.env[valueKey], defaultValue);
    }

    /**
     *
     * @param {string} valueKey
     * @param {number} radix
     * @param {number} defaultValue
     * @return {number}
     */
    function readIntEnv(valueKey, radix = 10, defaultValue = 0) {
        return readIntEnvValue(process.env[valueKey], radix, defaultValue);
    }

    return {
        loadEnv: loadEnv,
        loadEnvByName: loadEnvByName,
        loadDefaultEnv: loadDefaultEnv,

        readEnvValue: readEnvValue,
        readBoolEnvValue: readBoolEnvValue,
        readNumberEnvValue: readNumberEnvValue,
        readIntEnvValue: readIntEnvValue,

        readEnv: readEnv,
        readBoolEnv: readBoolEnv,
        readNumberEnv: readNumberEnv,
        readIntEnv: readIntEnv
    }
}();
