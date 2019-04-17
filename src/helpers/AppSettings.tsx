/**
 * This class serves as a single place to store
 * app-related settings (Such as constants)
 */

export class AppSettings {
    private static MarketKey = 'b7ekyOtb6Dx5Ibv+36BqN6+8qIoScyPcC7rJTPCWE2zw2xGS2qgRP3BZ';
    private static MarketSecret = 'sEdyeNo9VBHJABkT3lalGFi9IdwCN/UDBCJyrQ4gR0dYTddcKq8/EjGC83vP/b/o9j2y1Oywg2795jN4pS36AQ==';

    public static getMarketKey() {
        return this.MarketKey;
    }

    public static getMarketSecret() {
        return this.MarketSecret;
    }
}

