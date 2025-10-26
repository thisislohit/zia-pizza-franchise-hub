import Footer from "@/components/Footer";

const CookiesPolicyPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Cookies <span className="text-primary">Policy</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Cookies Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Cookies are small text files that are saved on the users' computer or the mobile device whenever the users visit any website or use it. Cookies help websites with tracking the users' behaviour, their actions, preferences, etc. (include but not just limited to login credentials, navigation, etc).
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  We, <strong className="text-foreground">Zia Pizza</strong>, would like to let you know that our website also uses cookies.
                </p>
              </div>

              {/* Fair Use */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Fair Use</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We use cookies to make sure that our website works well across all devices, to analyse our site's performance, user behaviour, for the purpose of creating insightful decisions and eventually serve our customers in a better way.
                  </p>
                  <p>
                    We do not use cookies to collect any personally identifiable information about our users. Users have the option to accept, not to accept, to block as required.
                  </p>
                </div>
              </div>

              {/* Types of Cookies */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Types of cookies that we use include the following:</h2>
                <div className="space-y-6">
                  {/* Necessary Cookies */}
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">Necessary Cookies</h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Necessary cookies are those cookies that improve users' experience, help us with enabling basic to advanced functions such as proper navigation throughout the site, secure login for the users across the globe, online payment, etc. Our website will not perform better if necessary cookies are removed. Apart from these, there are other cookies such as Transient Cookies, Session Cookies, In-memory Cookies. These will automatically get removed once the users leave our website or close the browser.
                      </p>
                    </div>
                  </div>

                  {/* Site Monitoring Cookies */}
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">Cookies For Site Monitoring or Statistics</h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        These cookies will make our web masters easy to analyse the website performance, users' behaviour, site's reach in the global market. Information collected and reported anonymously. For instance, we use third-party cookies such as Google Analytics in order to monitor the performance of our website. It helps us with analysing the site's ranking, site's position in Google, users' behaviour, how they are interacting with our site, which pages are viewed or clicked frequently and various other factors that help us with improving our site's ranking and usability too. The information generated will be stored on the Google Server and will live for about 11 months. However, if you would like to opt out. You can click here:
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Control */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">You can control cookies</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Users have the option to control all the cookies that we use. For better functioning of the website or for enhanced user experience, we would recommend that you accept the cookies. You can click on "I accept cookies" for better and error-free user experience. Or you can also click on "I don't accept cookies." Even if you refuse to accept the cookies, our site will be usable for you but certain functionalities may or may not work.
                  </p>
                </div>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Changes to our cookies policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We would request you to please, check this page from time-to-time as we bring changes to our cookies policy. Continuous use of our website will indicate that you accept the changes in our cookies policy and give your consent to use the cookies as needed for our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiesPolicyPage;
